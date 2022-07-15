from unicodedata import name
from django.db import models
from django.utils.translation import gettext_lazy as _


class Topics(models.Model):
    name= models.CharField(max_length=100)
    description = models.TextField(max_length=4096)
    forTime = models.DateField()

class Gallery(models.Model):
    '''
    Model Gallery
    '''
    name = models.CharField(
        max_length=100,
        verbose_name=_('Name'))
    """ slug = models.SlugField(
        editable=False, 
        max_length=100, 
        default=None, 
        blank=True,
        verbose_name=_('URL slug')
    ) """
    description = models.TextField(
        max_length=4096,
        verbose_name=_('Description'))
    photo = models.ImageField(
        upload_to='static/photo',
        verbose_name=_('Photo'))
    topic = models.ForeignKey(
        Topics, 
        on_delete=models.CASCADE, 
        default=None,
        blank=True,
        null=True,
        verbose_name=_('topic of gallery'))

    class Meta:
        '''
        Meta for Galery
        '''
        verbose_name = _('Gallery')
        verbose_name_plural = _('Galleries')


    def __str__(self) -> str:
        return str(self.name)



