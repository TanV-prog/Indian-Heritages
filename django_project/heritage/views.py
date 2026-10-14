from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from django.db.models import Q
from django.http import JsonResponse
from .models import HeritageEntry, Story, Contribution, LearningModule, QuizQuestion
from .forms import ContributionForm

def home(request):
    featured_entries = HeritageEntry.objects.all()[:8]
    stories = Story.objects.all()[:3]
    modules = LearningModule.objects.all()[:3]
    form = ContributionForm()

    categories = [
        {'id': 'farming', 'label': 'Traditional Farming', 'icon': '🌾', 'desc': 'Ancient mixed-cropping and seed preservation.'},
        {'id': 'crafts', 'label': 'Local Crafts', 'icon': '🧵', 'desc': 'Centuries-old handloom weaving, dyes, and woodwork.'},
        {'id': 'arts', 'label': 'Folk Arts', 'icon': '🎭', 'desc': 'Regional floor kolams, mural traditions, and puppetry.'},
        {'id': 'folklore', 'label': 'Folklore & Stories', 'icon': '📖', 'desc': 'Village parables, harvest mythologies, and ballads.'},
        {'id': 'food', 'label': 'Traditional Food', 'icon': '🍲', 'desc': 'Fermentation secrets, sun-drying, and native recipes.'},
        {'id': 'indigenous', 'label': 'Indigenous Knowledge', 'icon': '🌿', 'desc': 'Ethnobotanical home remedies and water architecture.'},
        {'id': 'festivals', 'label': 'Festivals & Traditions', 'icon': '🎉', 'desc': 'Solstice harvest celebrations and sacred groves.'},
        {'id': 'village', 'label': 'Village Life', 'icon': '🏡', 'desc': 'Communal well etiquette and passive clay homes.'},
    ]

    context = {
        'featured_entries': featured_entries,
        'stories': stories,
        'modules': modules,
        'categories': categories,
        'form': form,
    }
    return render(request, 'home.html', context)


def explore(request):
    entries = HeritageEntry.objects.all()
    
    # Query Search
    q = request.GET.get('q', '').strip()
    if q:
        entries = entries.filter(
            Q(name__icontains=q) |
            Q(state__icontains=q) |
            Q(district__icontains=q) |
            Q(village__icontains=q) |
            Q(short_description__icontains=q) |
            Q(traditional_practice__icontains=q)
        )

    # Category Filter
    category = request.GET.get('category', '').strip()
    if category and category != 'all':
        entries = entries.filter(category=category)

    # Status Filter
    status = request.GET.get('status', '').strip()
    if status and status != 'all':
        entries = entries.filter(preservation_status=status)

    context = {
        'entries': entries,
        'search_query': q,
        'selected_category': category,
        'selected_status': status,
        'total_count': entries.count(),
    }
    return render(request, 'explore.html', context)


def heritage_detail(request, slug):
    entry = get_object_or_404(HeritageEntry, slug=slug)
    related_entries = HeritageEntry.objects.filter(category=entry.category).exclude(id=entry.id)[:3]
    
    materials_list = [m.strip() for m in entry.materials_used.split(',') if m.strip()]

    context = {
        'entry': entry,
        'materials_list': materials_list,
        'related_entries': related_entries,
    }
    return render(request, 'heritage_detail.html', context)


def map_view(request):
    entries = HeritageEntry.objects.all()
    context = {'entries': entries}
    return render(request, 'map.html', context)


def stories_view(request):
    stories = Story.objects.all()
    context = {'stories': stories}
    return render(request, 'stories.html', context)


def contribute_view(request):
    if request.method == 'POST':
        form = ContributionForm(request.POST, request.FILES)
        if form.is_valid():
            contribution = form.save(commit=False)
            contribution.status = 'Pending Review'
            contribution.save()
            messages.success(
                request,
                "Thank you! Your heritage submission has been safely recorded with status 'Pending Review'. Our archival review committee will inspect the submission."
            )
            return redirect('contribute')
        else:
            messages.error(request, "Please check the form fields and ensure required items and permissions are provided.")
    else:
        form = ContributionForm()

    recent_approved = Contribution.objects.filter(status='Approved')[:5]

    context = {
        'form': form,
        'recent_approved': recent_approved,
    }
    return render(request, 'contribute.html', context)


def learn_view(request):
    modules = LearningModule.objects.all()
    questions = QuizQuestion.objects.all()
    context = {
        'modules': modules,
        'questions': questions,
    }
    return render(request, 'learn.html', context)


def api_search(request):
    q = request.GET.get('q', '').strip()
    results = []
    if q:
        entries = HeritageEntry.objects.filter(
            Q(name__icontains=q) |
            Q(state__icontains=q) |
            Q(short_description__icontains=q)
        )[:6]
        for e in entries:
            results.append({
                'id': e.id,
                'name': e.name,
                'category': e.get_category_display(),
                'state': e.state,
                'slug': e.slug,
                'status': e.get_preservation_status_display(),
            })
    return JsonResponse({'results': results})


def custom_404(request, exception=None):
    return render(request, '404.html', status=404)


def custom_500(request):
    return render(request, '500.html', status=500)
