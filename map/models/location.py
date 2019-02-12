from odoo import models, fields, api, _


class Locations(models.Model):
    _name = 'map.location'
    direccion = fields.Char("Dirección", required=True)
    latitude = fields.Char("Latitude", required=True)
    longitude = fields.Char("Longitude", required=True)
