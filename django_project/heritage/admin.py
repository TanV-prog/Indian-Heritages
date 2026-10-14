from django.contrib import admin
from .models import HeritageEntry, Story, Contribution, LearningModule, QuizQuestion, KnowledgeKeeper

@admin.action(description="Move selected submissions to 'Under Review'")
def make_under_review(modeladmin, request, queryset):
    queryset.update(status='Under Review')

@admin.action(description="Mark selected submissions as 'Community Verified'")
def make_community_verified(modeladmin, request, queryset):
    queryset.update(status='Community Verified')

@admin.action(description="Publish selected submissions to Living Archive")
def make_published(modeladmin, request, queryset):
    queryset.update(status='Published')

@admin.action(description="Mark selected submissions as 'Rejected'")
def make_rejected(modeladmin, request, queryset):
    queryset.update(status='Rejected')

@admin.action(description="Reset selected submissions to 'Pending Review'")
def make_pending(modeladmin, request, queryset):
    queryset.update(status='Pending Review')


@admin.register(HeritageEntry)
class HeritageEntryAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'category',
        'state',
        'preservation_status',
        'knowledge_holders_count',
        'young_practitioners_count',
        'knowledge_transfer_status',
        'verification_status',
    )
    list_filter = ('category', 'preservation_status', 'knowledge_transfer_status', 'state', 'verification_status')
    search_fields = ('name', 'state', 'district', 'village', 'short_description', 'associated_communities')
    prepopulated_fields = {'slug': ('name',)}


@admin.register(KnowledgeKeeper)
class KnowledgeKeeperAdmin(admin.ModelAdmin):
    list_display = ('name', 'tradition', 'location', 'state', 'years_of_experience', 'can_teach_others', 'active_learners_count')
    list_filter = ('can_teach_others', 'state')
    search_fields = ('name', 'tradition', 'skill', 'story')


@admin.register(Story)
class StoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'contributor', 'location', 'state', 'category', 'recorded_date')
    list_filter = ('category', 'state')
    search_fields = ('title', 'contributor', 'description', 'transcript')


@admin.register(Contribution)
class ContributionAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'contributor_name',
        'state',
        'contribution_type',
        'is_actively_practiced',
        'are_youth_learning',
        'can_teach',
        'status',
        'submitted_at',
    )
    list_filter = ('status', 'contribution_type', 'is_actively_practiced', 'are_youth_learning', 'state')
    search_fields = ('title', 'contributor_name', 'email', 'description', 'who_practices')
    actions = [make_under_review, make_community_verified, make_published, make_rejected, make_pending]


class QuizQuestionInline(admin.TabularInline):
    model = QuizQuestion
    extra = 2


@admin.register(LearningModule)
class LearningModuleAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'read_time')
    search_fields = ('title', 'category', 'description')
    inlines = [QuizQuestionInline]


@admin.register(QuizQuestion)
class QuizQuestionAdmin(admin.ModelAdmin):
    list_display = ('question', 'module', 'correct_answer')
    list_filter = ('correct_answer',)
