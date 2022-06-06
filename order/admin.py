from django.contrib import admin
from .models import Order, OrderItem
from rangefilter.filters import DateRangeFilter


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    readonly_fields = ('price',)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    inlines = (OrderItemInline,)
    list_display = ('order_id', 'is_paid', 'short_comment', 'makes_date')
    list_filter = ('is_paid', ('makes_date', DateRangeFilter))
