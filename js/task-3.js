/* 

profile nesnesi, bir oyun platformundaki kullanıcının profiline aittir. 
Özellikleri arasında profil adı username ve oyunda geçirilen playTime olarak belirtilen aktif saatler bulunmaktadır.

const profile = {
	username: "Jacob",
  playTime: 300,
};

profile nesnesini özellikleriyle çalışmak için metodlarla tamamlayın.

? changeUsername(newName) metodu, bir dizeyi (yeni ad) newName parametresi olarak
 almalı ve username özelliğinin değerini yeni değerle değiştirmelidir. 
! Hiçbir şey döndürmez.
? updatePlayTime(saatler) metodu, bir sayıyı (saat miktarı) hours parametresi olarak almalı ve playTime özelliğinin değerini artırmalıdır. 
! Hiçbir şey döndürmez.
? getInfo() metodu, <Username> has <amount> active hours! formatında bir dize döndürmelidir. 
* burada <Username>, profil adıdır ve <amount>, oyun saatlerinin miktarıdır.
? Fonksiyonunuzu tanımladıktan sonra aşağıdaki kodu alıp yapıştırın, böylece işlevin doğru çalışıp çalışmadığını kontrol edebilirsiniz. 
! Sonuçlar konsola yazdırılacaktır.



  !!!  Mentor kontrol ederken dikkat edilecek noktalar:
  ?  profile adında bir değişken tanımlandı
  ?  profile değişkeninin değeri, username, playTime, getInfo, changeUsername ve updatePlayTime özelliklerine sahip bir nesnedir
   !? getInfo özelliğinin değeri bir fonksiyondur
   ! changeUsername özelliğinin değeri bir fonksiyondur
  !  updatePlayTime özelliğinin değeri bir fonksiyondur
   ? Nesnenin özelliklerine metotlarında erişmek için this kullanılır.




*/

const profile = {
	username: "Jacob",
  playTime: 300,
  changeUsername : function changeUsername(newName){

    profile.username = newName;
 //   console.log(profile);

},
updatePlayTime : function updatePlayTime(hours){
    profile.playTime += hours;
  //  console.log(profile);
        
    },
    getInfo : function getInfo() {
        // console.log();
        return profile.username +" has " + profile.playTime+  " active hours!";
    }



};








// changeUsername(5);
// console.log(typeof profile.username);
// updatePlayTime(10);

console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

// profile.getInfo();
