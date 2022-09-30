import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import ValidvalueValidator from 'App/Validators/ValidvalueValidator'
import Database from '@ioc:Adonis/Lucid/Database'




export default class VenuesController {
  public async index({response}: HttpContextContract) {
    try{
      const allvenue = await Database.from('venues').select('*')
      response.ok({
        message:"berhasil mengambil data",
        data : allvenue
      })
    }catch(error){
      response.badRequest({
        message:"gagal mengambil data"
      })
    }
  }

  public async store({response, request}: HttpContextContract) {
    try{
    await Database.table('venues').insert({
      name: request.input('name'),
      address: request.input('address'),
      phone: request.input('phone')

    })
    response.created({
      message : "berhasil menyimpan data"
    })
  }catch (error){
    response.badRequest({
      message: "gagal menyimpan data venues"
    })
  }
  }

  public async show({response, params}: HttpContextContract) {
    try{
      const datavenue = await Database.from('venues')
      .where('id',params.id)
      .first()

      response.ok({
        message:"berhasil mengambil data 1 venue",
        data : datavenue
      })
    }catch(error){
      response.badRequest({
        message: "gagal mengambil data"
      })
    }
  }

  public async update({request,response,params}: HttpContextContract) {
    try{
      await Database.from('venues')
        .where('id',params.id).update({
          name: request.input('name'),
          address: request.input('address'),
          phone: request.input('phone')
        })
    response.ok({
      message:"data berhasil diupdate"
    })
  }catch(error){
    response.badRequest({
      message :"data gagal diupdate"
    })
  }
  }

  public async destroy({response,params}: HttpContextContract) {
    try{
      await Database.from('venues')
      .where('id',params.id)
      .delete()

      response.ok({
        message:"data berhasil dihapus"
      })
    }catch(error){
      response.badRequest({
        message : "data gagal dihapus"
      })
    }
  }
}
