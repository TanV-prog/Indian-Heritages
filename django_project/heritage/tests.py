from django.test import TestCase, Client
from django.urls import reverse
from .models import HeritageEntry, KnowledgeKeeper, Story, Contribution, LearningModule, QuizQuestion

class HeritageModelTests(TestCase):
    def setUp(self):
        self.entry = HeritageEntry.objects.create(
            name="Rogan Art",
            category="crafts",
            state="Gujarat",
            district="Kutch",
            village="Nirona",
            short_description="Castor oil and natural pigment fabric art.",
            history="Practiced by the Khatri community for centuries.",
            traditional_practice="Heating castor oil into rogan gel paste.",
            cultural_significance="Rare textile heritage.",
            preservation_status="at_risk",
            latitude=23.3768,
            longitude=69.6052
        )

        self.keeper = KnowledgeKeeper.objects.create(
            name="Abdul Gafur Khatri",
            location="Nirona, Kutch",
            state="Gujarat",
            tradition="Rogan Painting",
            skill="Castor oil styling and brass stylus design",
            years_of_experience=45,
            can_teach_others=True,
            active_learners_count=8,
            story="Preserved the craft across eight generations."
        )

        self.story = Story.objects.create(
            title="Voices of the Loom",
            contributor="Govindram",
            state="Andhra Pradesh",
            location="Machilipatnam",
            description="Recollections of natural dye kalamkari."
        )

        self.module = LearningModule.objects.create(
            title="Indigenous Millet Polyculture",
            category="Traditional Farming",
            read_time="6 min read",
            description="Ancient multi-crop resilience methods.",
            introduction="Mixed dryland seed systems.",
            key_facts="Drought tolerant\nConserves groundwater",
            traditional_process="Broadcast sowing\nCompanion weeding",
            cultural_significance="Nutritional sovereignty"
        )

        self.question = QuizQuestion.objects.create(
            module=self.module,
            question="What is the base of authentic Rogan art paste?",
            option_a="Boiled Castor Oil",
            option_b="Mustard Seed Oil",
            option_c="Soybean Oil",
            option_d="Linseed Varnish",
            correct_answer="A",
            explanation="Castor oil is boiled continuously for over 12 hours until it forms a dense gel."
        )

    def test_heritage_entry_creation_and_slug(self):
        self.assertEqual(self.entry.name, "Rogan Art")
        self.assertEqual(self.entry.slug, "rogan-art")
        self.assertIn("Rogan Art", str(self.entry))

    def test_knowledge_keeper_model(self):
        self.assertEqual(self.keeper.name, "Abdul Gafur Khatri")
        self.assertTrue(self.keeper.can_teach_others)
        self.assertIn("Abdul Gafur Khatri", str(self.keeper))

    def test_quiz_question_relation(self):
        self.assertEqual(self.question.module, self.module)
        self.assertEqual(self.question.correct_answer, "A")


class HeritageViewTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.entry = HeritageEntry.objects.create(
            name="Majuli Mask Making",
            category="crafts",
            state="Assam",
            district="Majuli",
            village="Samaguri Satra",
            short_description="Bamboo and clay theatrical masks.",
            history="Practiced in Neo-Vaishnavite Satras since 16th century.",
            traditional_practice="Bamboo split armature bound with clay cloth.",
            cultural_significance="Bhaona theatre tradition.",
            preservation_status="at_risk",
            latitude=26.9537,
            longitude=94.1952
        )

    def test_home_page_status_code(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Majuli Mask Making")

    def test_explore_page(self):
        response = self.client.get(reverse('explore'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Majuli Mask Making")

    def test_explore_search_filter(self):
        response = self.client.get(reverse('explore') + '?q=Assam')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Majuli Mask Making")

        response_empty = self.client.get(reverse('explore') + '?q=NonExistentQueryXYZ')
        self.assertEqual(response_empty.status_code, 200)
        self.assertNotContains(response_empty, "Majuli Mask Making")

    def test_heritage_detail_view(self):
        response = self.client.get(reverse('heritage_detail', kwargs={'slug': self.entry.slug}))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Majuli Mask Making")
        self.assertContains(response, "Assam")

    def test_map_view(self):
        response = self.client.get(reverse('map'))
        self.assertEqual(response.status_code, 200)

    def test_stories_view(self):
        response = self.client.get(reverse('stories'))
        self.assertEqual(response.status_code, 200)

    def test_learn_view(self):
        response = self.client.get(reverse('learn'))
        self.assertEqual(response.status_code, 200)

    def test_api_search_endpoint(self):
        response = self.client.get(reverse('api_search') + '?q=Majuli')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(len(data['results']) > 0)
        self.assertEqual(data['results'][0]['name'], "Majuli Mask Making")

    def test_contribution_post(self):
        payload = {
            'contributor_name': 'Test Researcher',
            'email': 'researcher@example.org',
            'state': 'Tamil Nadu',
            'district': 'Nilgiris',
            'village': 'Mund',
            'contribution_type': 'Indigenous Knowledge',
            'title': 'Toda Buffalo Pastoralism',
            'description': 'Sacred buffalo herds and barrel-vaulted temples.',
            'traditional_practice': 'Ritual dairy operation by ordained priest.',
            'cultural_significance': 'Ecological pasture guardianship.',
            'preservation_status': 'at_risk',
            'permission_granted': True
        }
        response = self.client.post(reverse('contribute'), payload)
        # Should redirect after valid submission or render success message
        self.assertIn(response.status_code, [200, 302])
        self.assertTrue(Contribution.objects.filter(title='Toda Buffalo Pastoralism').exists())
