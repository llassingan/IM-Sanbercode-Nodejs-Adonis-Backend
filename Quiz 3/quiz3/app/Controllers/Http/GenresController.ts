import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'


export default class GenresController {
  public async index({response}: HttpContextContract) {
    try{
      const allgenres = await Database.from('genres').select('*')
      response.ok({
        message:"berhasil mengambil data",
        data : allgenres
      })
    }catch(error){
      response.badRequest({
        message:"gagal mengambil data"
      })
    }
  }


  // public async create({}: HttpContextContract) {}

  public async store({response, request}: HttpContextContract) {
    try{
    await Database.table('genres').insert({
      name: request.input('name'),

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
      const datagenre = await Database.from('genres')
      .where('id',params.id)
      .first()

      response.ok({
        message:"berhasil mengambil data 1 venue",
        data : datagenre
      })
    }catch(error){
      response.badRequest({
        message: "gagal mengambil data"
      })
    }
  }

  // public async edit({}: HttpContextContract) {}

  public async update({request,response,params}: HttpContextContract) {
    try{
      await Database.from('genres')
        .where('id',params.id).update({
          name: request.input('name'),
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
      await Database.from('genres')
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
