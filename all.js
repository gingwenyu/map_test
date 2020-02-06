var select; 
document.querySelector("#area").addEventListener('change',filterData,false);   

function filterData(e){
  console.log(e.target.value);
  select=e.target.value;  
}  
console.log(select);

function initMap() {
      //設定中心點座標

          let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: {lat: 23.858906, lng: 120.918994}            
          });

          for(let i=0;i<data.length;i++){
            let location={};
            location.lat=parseFloat(data[i][TGOS Y]);
            location.lng=parseFloat(data[i][TGOS X]);
          //  location.y=parseFloat(data[i].Py);
          //  location.x=parseFloat(data[i].Px);
            console.log(location);

            /* var place = {};
               place.lat = parseFloat(data.result.records[i]['Lat']);
               place.lng = parseFloat(data.result.records[i]['Lng']);   */  
            /*
            if(select==data[i].Zone){
               console.log('ok');
            }
            */

            let str={};
                str.map=map;
                str.title=data[i].醫事機構名稱;                
                str.position=location;
                console.log(str);
            let marker =new google.maps.Marker(str);
            
            
            let contentString =`[${data[i].分區業務組}]<br>${data[i].醫事機構名稱}<br>${data[i].醫事機構種類}<br>${data[i].電話}<br>${data[i].服務項目}`;
            let infowindow = new google.maps.InfoWindow({
                content: contentString,                
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
            
          
          
          }

      }

    
    
