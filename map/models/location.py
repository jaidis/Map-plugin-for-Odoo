from odoo import models, fields, api, _


class Locations(models.Model):
    _name = 'map.location'
    direccion = fields.Char("Dirección", required=True)
    poblacion = fields.Char('Población', required=False)
    provincia = fields.Char('Provincia', required=False)
    codPostal = fields.Integer('Cod Postal', required=False)
    latitude = fields.Char("Latitude", required=True)
    longitude = fields.Char("Longitude", required=True)

    def name_get(self):
        res = []
        for record in self:
            name = record.direccion + ' - ' + record.poblacion + ' ' + record.provincia
            res.append((record.id, name))
        return res
