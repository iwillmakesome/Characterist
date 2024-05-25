import { useState, useEffect, useRef } from 'react';

export const useDebounce = (changeHandler, delay) => {
  const [debouncedValue, setDebouncedValue] = useState();
  const timer = useRef();

  // 디바운스 강제 종료
  const stopDebounce = () => {
    clearTimeout(timer.current);
  };

  // debouncedValue 값이 변경되면 타이머 생성
  useEffect(() => {
    // delay 이후 changeHandler로 원하는 값 변경
    timer.current = setTimeout(() => {
      if (debouncedValue === undefined) return;
      changeHandler(debouncedValue);
    }, delay);

    // timer가 끝나기 이전에 debouncedValue가 변경되면 타미머 삭제
    // 디바운스를 선언한 컴포넌트가 언마운트 될 때 삭제
    return () => {
      clearTimeout(timer.current);
    };
  }, [debouncedValue]);

  // setDebouncedValue를 내보내 원하는 위치에서 값을 변경하여 debounce 실행
  return [setDebouncedValue, stopDebounce];
};
