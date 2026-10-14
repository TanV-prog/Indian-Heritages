from django import forms
from .models import Contribution

class ContributionForm(forms.ModelForm):
    CONTRIBUTION_TYPES = [
        ('Traditional farming practice', '🌾 Traditional farming practice'),
        ('Craft technique', '🧵 Craft technique'),
        ('Folk story', '📖 Folk story'),
        ('Folk song', '🎶 Folk song'),
        ('Traditional recipe', '🍲 Traditional recipe'),
        ('Festival tradition', '🎉 Festival tradition'),
        ('Indigenous knowledge', '🌿 Indigenous knowledge'),
        ('Village tradition', '🏡 Village tradition'),
        ('Traditional architecture', '🏛 Traditional architecture'),
        ('Other', '✨ Other'),
    ]

    STATUS_CHOICES = [
        ('thriving', '🟢 Thriving (Widely practiced)'),
        ('declining', '🟡 Declining (Fewer youth practitioners)'),
        ('at_risk', '🟠 At Risk (Loss of habitat or raw material depletion)'),
        ('endangered', '🔴 Critically At Risk (Only a few elders remain)'),
    ]

    contribution_type = forms.ChoiceField(choices=CONTRIBUTION_TYPES, widget=forms.Select(attrs={'class': 'form-select'}))
    preservation_status = forms.ChoiceField(choices=STATUS_CHOICES, widget=forms.Select(attrs={'class': 'form-select'}))

    class Meta:
        model = Contribution
        fields = [
            'contributor_name',
            'email',
            'state',
            'district',
            'village',
            'contribution_type',
            'title',
            'who_practices',
            'is_actively_practiced',
            'are_youth_learning',
            'can_teach',
            'description',
            'traditional_practice',
            'cultural_significance',
            'preservation_status',
            'media',
            'audio_video_link',
            'additional_info',
            'permission_granted',
        ]
        widgets = {
            'contributor_name': forms.TextInput(attrs={'placeholder': 'Your Full Name', 'class': 'form-input'}),
            'email': forms.EmailInput(attrs={'placeholder': 'your.email@example.org', 'class': 'form-input'}),
            'state': forms.TextInput(attrs={'placeholder': 'e.g. Telangana', 'class': 'form-input'}),
            'district': forms.TextInput(attrs={'placeholder': 'e.g. Medak', 'class': 'form-input'}),
            'village': forms.TextInput(attrs={'placeholder': 'e.g. Pastapur', 'class': 'form-input'}),
            'title': forms.TextInput(attrs={'placeholder': 'Traditional Practice or Craft Name', 'class': 'form-input'}),
            'who_practices': forms.TextInput(attrs={'placeholder': 'e.g. Elder women seed keepers', 'class': 'form-input'}),
            'is_actively_practiced': forms.Select(attrs={'class': 'form-select'}),
            'are_youth_learning': forms.Select(attrs={'class': 'form-select'}),
            'can_teach': forms.Select(attrs={'class': 'form-select'}),
            'description': forms.Textarea(attrs={'rows': 3, 'placeholder': 'Describe this knowledge in detail...', 'class': 'form-textarea'}),
            'traditional_practice': forms.Textarea(attrs={'rows': 3, 'placeholder': 'What are the steps, botanical recipes, or methods?', 'class': 'form-textarea'}),
            'cultural_significance': forms.Textarea(attrs={'rows': 3, 'placeholder': 'Why is this important to carry forward?', 'class': 'form-textarea'}),
            'audio_video_link': forms.URLInput(attrs={'placeholder': 'https://...', 'class': 'form-input'}),
            'additional_info': forms.Textarea(attrs={'rows': 2, 'placeholder': 'Any other context or family history...', 'class': 'form-textarea'}),
            'permission_granted': forms.CheckboxInput(attrs={'class': 'form-checkbox'}),
        }

    def clean_permission_granted(self):
        granted = self.cleaned_data.get('permission_granted')
        if not granted:
            raise forms.ValidationError("You must confirm that you have permission to document this traditional knowledge.")
        return granted
