// �ȴ�����PhoneGap
document.addEventListener("deviceready", onDeviceReady, false); 

// PhoneGap�������
function onDeviceReady() {
   	window.localStorage.setItem("key", "value");
	var value = window.localStorage.getItem("key");
   	// value��ֵ�����ǡ�value��
	alert("key��ֵ:"+value);

   	window.localStorage.removeItem("key");
   	window.localStorage.setItem("key2", "value2");
   	window.localStorage.clear();
	alert("����clear����֮��,key��ֵ:"+localStorage.getItem("key2"));
	   	// localStorage�����ǿյ�
}