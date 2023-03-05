export default function () {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const texts = document.querySelectorAll(".hacker-text");

  const intervalMap = new Map<HTMLElement, NodeJS.Timeout>();
  texts.forEach(text => {
    text.addEventListener("mouseover", event => {
      const target = event.target as HTMLElement;
      let iteration = 0;

      clearInterval(intervalMap.get(target));

      intervalMap.set(
        target,
        setInterval(() => {
          target.innerText = target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return target.dataset.value!![index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

          if (iteration >= target.innerText.length) {
            clearInterval(intervalMap.get(target));
          }

          iteration += 1 / (iteration + 1);
        }, 30)
      );
    });
  });
}
