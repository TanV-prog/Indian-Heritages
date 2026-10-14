from django.db import models
from django.utils.text import slugify

class HeritageEntry(models.Model):
    CATEGORY_CHOICES = [
        ('farming', 'Traditional Farming'),
        ('crafts', 'Local Crafts'),
        ('arts', 'Folk Arts'),
        ('folklore', 'Folklore & Stories'),
        ('food', 'Traditional Food'),
        ('indigenous', 'Indigenous Knowledge'),
        ('festivals', 'Festivals & Traditions'),
        ('village', 'Village Life'),
    ]

    STATUS_CHOICES = [
        ('thriving', '🟢 Thriving'),
        ('declining', '🟡 Declining'),
        ('at_risk', '🟠 At Risk'),
        ('endangered', '🔴 Critically At Risk'),
    ]

    VERIFICATION_CHOICES = [
        ('Pending Review', '⏳ Pending Review'),
        ('Under Review', '🔍 Under Review'),
        ('Community Verified', '✅ Community Verified'),
        ('Prototype / Demo Entry', '🏛 Prototype / Demo Entry'),
    ]

    name = models.CharField(max_length=255, help_text="Traditional name of craft, practice or oral art")
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100, blank=True)
    village = models.CharField(max_length=100, blank=True)
    
    short_description = models.TextField(help_text="Concise summary for cards and catalog displays")
    full_description = models.TextField(blank=True)
    history = models.TextField(help_text="Historical provenance, origins and centuries of transmission")
    traditional_practice = models.TextField(help_text="Step-by-step description of how the tradition is practiced")
    materials_used = models.TextField(blank=True, help_text="Comma-separated or listed natural ingredients and artisan tools")
    cultural_significance = models.TextField(help_text="Community, spiritual, ecological, and ethical value")
    associated_communities = models.CharField(max_length=255, blank=True)
    current_challenges = models.TextField(blank=True, help_text="Threats, raw material shortages, economic pressures")
    
    preservation_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='at_risk')
    latitude = models.FloatField(default=20.5937, help_text="Geographical latitude for the Heritage Map")
    longitude = models.FloatField(default=78.9629, help_text="Geographical longitude for the Heritage Map")
    
    # Heritage Continuity Profile Fields
    knowledge_holders_count = models.IntegerField(default=12, help_text="Documented elder knowledge holders (Demo Data)")
    young_practitioners_count = models.IntegerField(default=4, help_text="Active younger learners (Demo Data)")
    communities_count = models.IntegerField(default=3, help_text="Documented village clusters (Demo Data)")
    last_documented = models.CharField(max_length=100, default="March 2026")
    learning_available = models.BooleanField(default=True)
    knowledge_transfer_status = models.CharField(
        max_length=50,
        choices=[
            ('Active Mentorship', 'Active Mentorship'),
            ('Fragmented Transmission', 'Fragmented Transmission'),
            ('Critical Interruption', 'Critical Interruption'),
        ],
        default='Fragmented Transmission'
    )
    risk_factors = models.TextField(blank=True, help_text="Primary threats to transmission, separated by newline")
    preservation_action_needed = models.TextField(blank=True, help_text="Concrete actions needed to sustain practice")

    image = models.ImageField(upload_to='heritage_images/', blank=True, null=True)
    image_url = models.CharField(max_length=500, blank=True, help_text="Static or fallback asset path")
    contributor = models.CharField(max_length=255, default="Indian Heritage Archive")
    verification_status = models.CharField(max_length=50, choices=VERIFICATION_CHOICES, default='Community Verified')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Heritage Entry"
        verbose_name_plural = "Heritage Entries"
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} ({self.get_category_display()} - {self.state})"


class KnowledgeKeeper(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    state = models.CharField(max_length=100)
    tradition = models.CharField(max_length=255)
    skill = models.CharField(max_length=255)
    years_of_experience = models.IntegerField(default=30)
    can_teach_others = models.BooleanField(default=True)
    active_learners_count = models.IntegerField(default=5)
    story = models.TextField()
    image_url = models.CharField(max_length=500, default="/static/images/elder_oral_storyteller.jpg")
    is_demo_profile = models.BooleanField(default=True, help_text="Clearly marked as demonstration profile")

    class Meta:
        verbose_name = "Knowledge Keeper"
        verbose_name_plural = "Knowledge Keepers"

    def __str__(self):
        return f"{self.name} ({self.tradition} - {self.state})"


class Story(models.Model):
    title = models.CharField(max_length=255)
    contributor = models.CharField(max_length=255, help_text="Elder, artisan, farmer, or community bard")
    contributor_role = models.CharField(max_length=255, blank=True)
    location = models.CharField(max_length=255)
    state = models.CharField(max_length=100)
    category = models.CharField(max_length=100, default="Oral History")
    description = models.TextField()
    media_url = models.URLField(blank=True, help_text="Optional audio/video recording link")
    audio_sample_name = models.CharField(max_length=255, blank=True)
    transcript = models.TextField(blank=True, help_text="Spoken translation or transcription")
    verification_status = models.CharField(max_length=50, default="Sample Field Archive")
    recorded_date = models.CharField(max_length=100, default="2026")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Oral History Story"
        verbose_name_plural = "Oral History Stories"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title} - By {self.contributor}"


class Contribution(models.Model):
    STATUS_CHOICES = [
        ('Pending Review', '⏳ Pending Review'),
        ('Under Review', '🔍 Under Review'),
        ('Community Verified', '✅ Community Verified'),
        ('Published', '🌐 Published'),
        ('Rejected', '❌ Rejected'),
    ]

    contributor_name = models.CharField(max_length=255)
    email = models.EmailField()
    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100, blank=True)
    village = models.CharField(max_length=100, blank=True)
    contribution_type = models.CharField(max_length=100, default='Traditional farming practice')
    title = models.CharField(max_length=255, help_text="Name of traditional craft or practice")
    who_practices = models.CharField(max_length=255, blank=True, help_text="Who traditionally practices this?")
    is_actively_practiced = models.CharField(max_length=50, default='Yes', choices=[('Yes', 'Yes'), ('Partially', 'Partially'), ('No / Barely', 'No / Barely')])
    are_youth_learning = models.CharField(max_length=50, default='Few', choices=[('Yes', 'Yes'), ('Few', 'Few'), ('None', 'None')])
    can_teach = models.CharField(max_length=50, default='Yes', choices=[('Yes', 'Yes'), ('Possibly', 'Possibly'), ('No', 'No')])
    
    description = models.TextField()
    traditional_practice = models.TextField(blank=True)
    cultural_significance = models.TextField(blank=True)
    preservation_status = models.CharField(max_length=20, default='at_risk')
    media = models.FileField(upload_to='contributions/', blank=True, null=True)
    audio_video_link = models.URLField(blank=True)
    additional_info = models.TextField(blank=True)
    permission_granted = models.BooleanField(default=False)
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='Pending Review')
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Community Contribution"
        verbose_name_plural = "Community Contributions"
        ordering = ['-submitted_at']

    def __str__(self):
        return f"{self.title} - {self.contributor_name} [{self.status}]"


class LearningModule(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    read_time = models.CharField(max_length=50, default="5 min read")
    description = models.TextField()
    introduction = models.TextField()
    key_facts = models.TextField(help_text="Key facts separated by newline")
    traditional_process = models.TextField(help_text="Process steps separated by newline")
    cultural_significance = models.TextField()

    class Meta:
        verbose_name = "Learning Module"
        verbose_name_plural = "Learning Modules"

    def __str__(self):
        return self.title


class QuizQuestion(models.Model):
    module = models.ForeignKey(LearningModule, on_delete=models.CASCADE, related_name='questions', null=True, blank=True)
    question = models.CharField(max_length=500)
    option_a = models.CharField(max_length=255)
    option_b = models.CharField(max_length=255)
    option_c = models.CharField(max_length=255)
    option_d = models.CharField(max_length=255)
    correct_answer = models.CharField(
        max_length=1,
        choices=[('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D')],
        default='A'
    )
    explanation = models.TextField(blank=True)

    def __str__(self):
        return self.question
