const Joi=require('joi')

exports.StreetArtSchema = Joi.object({
    StreetArt: Joi.object({
      title: Joi.string().trim().required(),
      description: Joi.string().trim().required(),
      location: Joi.string().trim().required(),
      artist_name: Joi.string().trim().required(),
      date_created: Joi.date().iso().required(),
      image_url: Joi.string().uri().required()
    })
  });