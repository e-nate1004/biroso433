# QR 이미지 형식 (고정 · 2026-10-23 확정, 수정 금지)

사용자 지시: "앞으로 QR코드 이미지의 형식은 절대 수정하지 말고 픽스해" (2026-10-23 21:09 KST)
이 폴더의 파일이 기준본이다. 디자인·문구·색·크기·배치를 바꾸지 않는다.
연결 주소가 바뀌는 등 꼭 다시 만들어야 할 때도 QR 무늬 외에는 그대로 두고, 사용자 승인을 먼저 받는다.

## 1. 손님 전송용 QR 이미지 — biroso433_GuestGuide_QR.png
- 크기: 1080×1350 px, PNG
- 배경 #ecebe1, 글자 #1d1f15, 강조 #5a6930, 글꼴 Noto Sans CJK KR
- 위에서부터: 손그림 아이콘(92px, 둥근 모서리) + "BIROSO 433" / "비로소4'33''"
  → 제목 "Guest Guide"(104px, 굵게) → "이용안내 · 入住指南 · ご利用案内"
  → 흰 카드(테두리 #d9d7c6, 모서리 32px) 안 QR 500×500
  → "biroso433.com"(52px, 올리브) → 안내 2줄 "카메라로 QR코드를 비추거나 주소를 눌러 주세요 / Scan the QR code or open the link above"
- 원본 HTML: guest-card-source.html

## 2. 출력용 A5 안내문 — Guest_Guide_QR_A5_biroso433com.jpg
- A5 148×210mm, 300dpi, 1748×2480 px, JPG 품질 95
- 배경 #ecebe1, 제목 "Guest Guide"(먹색 #1d1f15), 흰 카드 안 QR, 가운데 정렬, 그 외 요소 없음
- Claude 디자인 캔버스 "비로소433 객실 QR 안내문" 버전 5와 같은 형식

## QR코드 자체
- 내용: https://biroso433.com/
- 오류 보정 Q, 버전 3 (29×29), 먹색 #1d1f15, qr.svg
