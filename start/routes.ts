/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/planilla', async ({ view }) => {
  return view.render('pages/planilla')
})

router.get('/propuestas', async ({ view }) => {
  return view.render('pages/propuestas')
})