{
    'name': 'Plugin Mapa',
    'version': '0.1',
    'description': 'Modelo básico para mapas',
    'category': 'Tools',
    'summary': 'Modulo para Odoo que utiliza las herramientas Leafletjs y Mapbox para mostrar mapas',
    'author': 'Manuel Munoz',
    'depends': ['web'],
    'installable': True,
    'auto_install': False,
    'application': True,
    'data': ['views/menu.xml', 'views/location.xml', 'views/contact.xml']
}
