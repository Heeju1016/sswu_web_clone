import React, { useEffect } from 'react';

function KakaoMap() {
  useEffect(() => {
    // Kakao Maps API가 로드되었는지 확인
    if (!window.kakao) {
      const script = document.createElement('script');
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=7360a967f77486010ce9678538182c03&autoload=false'; // YOUR_APP_KEY를 실제 앱 키로 교체
      script.onload = () => {
        // API가 로드되면 지도를 초기화
        window.kakao.maps.load(() => {
          const container = document.getElementById('map');
          console.log(container);
          const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
          };
          const map = new window.kakao.maps.Map(container, options);
        });
      };
      document.head.appendChild(script);
    } else {
      // 이미 로드된 경우
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        console.log(container);
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3
        };
        const map = new window.kakao.maps.Map(container, options);
      });
    }
  }, []);
  
  return (
    <div id='map' style={{ width: '320px', height: '400px', borderRadius: '10px'}}></div>
  );
}

export default KakaoMap;