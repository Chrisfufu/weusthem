# Generated by Django 3.0 on 2020-04-22 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('firstName', models.TextField(null=True)),
                ('lastName', models.TextField(null=True)),
                ('email', models.TextField(null=True)),
                ('phone', models.IntegerField(null=True)),
            ],
            options={
                'verbose_name': 'Contact',
                'db_table': 'Contact',
            },
        ),
    ]
