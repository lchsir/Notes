var publicPath = '';
var host = '';
var desc = '';
var port = 80; // ��������:80, ����:443
var hosts = {
    dev: 'js.dev.meixincdn.com',
    prd: 'js-pre.meixincdn.com'
};
var pathname = '/debug/src/js';

var regString = process.argv.join('');

if(regString.indexOf('mx-dev')!= -1){

    host = hosts.dev;
    desc = '������������,���: ';
    port = 80;
}  else if (regString.indexOf('mx-prd')!= -1) {
    host = hosts.prd;
	port = 443;
    desc = '�����桿,���: ';
}

publicPath = host + pathname;

module.exports = {
	host: host,
	port: port,
	publicPath: publicPath
}