---
title: CSS 늘어난 img 비율 되돌리기 {object-fit:contain;}
date: "2021-09-27T00:00:00.000Z"
template: "post"
draft: false
slug: "CSS object-fit으로 틀 만들기"
category: "CSS"
tags:
  - "CSS"
  - "object-fit"
description: "블로그 깎는 노인"
socialImage: "/media/2021-09-27---CSS-늘어난-img-비율-되돌리기-{object-fit:contain;}/stretched.PNG"
---

![stretched img](/media/2021-09-27---CSS-늘어난-img-비율-되돌리기-{object-fit:contain;}/stretched.PNG)

_늘어난 이미지_

---

직전의 글 레이아웃이 고장났다. 손바닥만한 책이 정사각형으로 늘어났다.

세로로 긴 사진이 이렇게 늘어나는 듯 하다.

[ON.town 사용기](https://yeoularu.github.io/posts/ON.town%20%EC%82%AC%EC%9A%A9%EA%B8%B0)에 넣었던 브라우저 캡처도 세로로 길었는데 그건 비율이 유지되고 대신 세로 길이가 엄청 크게 나왔다. 아마 해상도가 높아서 직전 글이랑 차이가 난게 아닐까 싶다.

여튼 고치려고 구글링을 열심히 했다. 그렇게 max-height 같은거 건들여보다가 결국 찾아냈다.

## "object-fit" the KING

개츠비가 이미지를 \<p> 태그로 어떤 박스 안에 넣어버리는걸로 보였다. 이렇게 정해져버린 박스 크기를 조절하기엔 아직 내 이해도가 부족했다.

그래서 정해진 박스 크기 안에서 비율이 꽉 채워지지 않고 원본 비율을 유지하도록 object-fit 값을 contain으로 주었다.

![I solved!](/media/2021-09-27---CSS-늘어난-img-비율-되돌리기-{object-fit:contain;}/solved.PNG)

이게 잘 먹혀서, 원본 비율을 드디어 볼 수 있었다.

---

![edit css code](/media/2021-09-27---CSS-늘어난-img-비율-되돌리기-{object-fit:contain;}/edit-css.PNG)

그대로 SCSS 코드를 수정해주고 yarn develop했더니 잘 적용되었다.

### 호환성이

![object-fit compatibility](/media/2021-09-27---CSS-늘어난-img-비율-되돌리기-{object-fit:contain;}/compatibility.PNG)
IE는 이 object-fit을 못읽는다는게 한가지 아쉬운 점이다. IE사용자분들은 다음 결과를 봐도 옆으로 늘어진 개발자 잡지 사진을 보게 되겠다.

_[결과](https://yeoularu.github.io/posts/%EA%B0%9C%EB%B0%9C%EC%9E%90%20%EC%9E%A1%EC%A7%80%20%EB%8F%85%ED%9B%84%EA%B0%90)_
