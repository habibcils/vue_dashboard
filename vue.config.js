// module.exports = {
//     baseUrl: "/dev/vue-dashboard/"
//     // baseUrl: '/yoursubfolder/'
//     }

    module.exports = {
        publicPath: process.env.NODE_ENV === 'production'
          ? '/dev/vue-dashboard/'
          : '/'
      }
