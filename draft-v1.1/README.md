# v1.1 초안 (승인 대기 · 배포 안 됨)
- sw.js: 서비스 워커 (네트워크 우선, 오프라인 시 마지막 내용 표시, 캐시 biroso433-v1.1)
- index.html에 넣을 등록 코드 (*.github.io 조건은 자체 도메인에 맞게 location.hostname === 'biroso433.com' 으로 바꿔야 함):
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('/sw.js')
- 하단 버전 표기 v1.0 → v1.1
- 적용 전: main의 최신 index.html(og 미리보기 태그 포함) 기준으로 다시 만들고, 사용자 승인 후 세 곳에 반영
