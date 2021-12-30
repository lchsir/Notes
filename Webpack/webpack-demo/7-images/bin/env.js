var publicPath = '';
var host = '';
var desc = '';
var port = 80; // ��������:80, ����:443
var hosts = {
    dev: 'js.dev.meixincdn.com',
    prd: 'js-pre.meixincdn.com'
};
var pathname = '';

var regString = process.argv.join('');

if(regString.indexOf('mx-dev')!= -1){

    host = hosts.dev;
    desc = '������������,���: ';
    port = 80;
	pathname = '/CDN8053/'
}  else if (regString.indexOf('mx-prd')!= -1) {
    host = hosts.prd;	
    desc = '�����桿,���: ';
	port = 443;
	pathname = '/m/pc/';
	
}

publicPath = host + pathname;

module.exports = {
	host: host,
	port: port,
	publicPath: publicPath
}