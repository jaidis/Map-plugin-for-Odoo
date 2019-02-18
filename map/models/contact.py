from odoo import models, fields, api, _


class Contacts(models.Model):
    _name = 'map.contact'
    dni = fields.Char('DNI', required=True)
    nombre = fields.Char('Nombre', required=True)
    apellidos = fields.Char('Apellidos', required=True)
    direccion = fields.Many2one('map.location', 'Localización', required=True)
    telefono = fields.Integer('Telefono', required=True)
    email = fields.Char('Email', required=True)

    def name_get(self):
        res = []
        for record in self:
            name = record.dni + ' - ' + record.nombre + ' - ' + record.apellidos
            res.append((record.id, name))
        return res
