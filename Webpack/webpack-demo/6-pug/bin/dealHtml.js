var fs = require('fs');
var path = require('path')
var paths = require('./paths')

var HtmlWebpackPlugin = require('html-webpack-plugin');  //����pug

function dealHtml(obj){
	
	var pugDir = fs.readdirSync(paths.pug); //pugĿ¼�µ��ļ���Ҳ�п���ΪĿ¼
		
	pugDir.forEach(function(dir,index,arr){	//dir �ļ���
		_dir = path.join(paths.pug,dir)
		var pugs = fs.readdirSync(_dir);	//htmls �ļ����µ�pug�ļ�����
		
		pugs.forEach(function(file){	//ÿһ���ļ�\
		
		var _file = file.replace(/pug$/,'html');

			var temp =  new HtmlWebpackPlugin({
				filename: '/html/'+ dir + '/'+_file,
				template:path.join(_dir,file),
				inject:false
			  
			})	
			
			obj.push(temp);
			
		})
	})
}

module.exports = dealHtml;