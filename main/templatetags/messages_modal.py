from django import template
from django.template import Context
from django.contrib.messages import constants as message_constants
from bootstrap5.utils import render_template_file

register = template.Library()


@register.simple_tag(takes_context=True)
def bootstrap_modal_messages(context, *args, **kwargs):

    if isinstance(context, Context):
        context = context.flatten()
    context.update({"message_constants": message_constants})
    return render_template_file("main/messages.html", context=context)
