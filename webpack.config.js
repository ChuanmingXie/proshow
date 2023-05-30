'use strict'

const path=require('path')
const autoprefixer = require('autoprefixer')

module.exports={
    entry:'./src/js/main.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/assets/',    
    },
    devServer:{
        static:path.resolve(__dirname,'dist'),
        port:8086,
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.(scss)$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {
                        loader:'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins: () => [
                                    autoprefixer
                                  ]
                            }
                        }
                    },
                    {loader:'sass-loader'}
                ]
            }
        ]
    }
}