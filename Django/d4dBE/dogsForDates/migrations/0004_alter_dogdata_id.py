# Generated by Django 5.1 on 2024-08-22 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dogsForDates', '0003_dogdata_id_alter_dogdata_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dogdata',
            name='id',
            field=models.AutoField(default=1, primary_key=True, serialize=False),
        ),
    ]
