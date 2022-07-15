# Generated by Django 4.0.6 on 2022-07-15 10:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0004_topics'),
    ]

    operations = [
        migrations.AddField(
            model_name='gallery',
            name='topic',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='polls.topics', verbose_name='topic of gallery'),
        ),
    ]
