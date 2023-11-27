let currentNodeIndex = 0;
let nodes = document.body.childNodes;

function processNode(index) {
  const currentNode = nodes[index];

  if (!currentNode) {
    alert("Досягнуто кінця DOM-дерева.");
    return;
  }

  if (currentNode.nodeType === Node.ELEMENT_NODE) {
    const nodeContent = currentNode.textContent.trim();
    const message = `Вміст поточного вузла: ${nodeContent}\nЩо ви хочете зробити?\n1. Перейти до наступного вузла\n2. Повернутися назад\n3. Завершити роботу`;

    const choice = prompt(message);

    if (choice === "1") {
      processNode(index + 1);
    } else if (choice === "2" && index > 0) {
      processNode(index - 1);
    } else if (choice === "3") {
      alert("Робота завершена.");
    } else {
      alert("Вибір некоректний. Будь ласка, виберіть дію знову.");
      processNode(index); // Запитати знову
    }
  } else {
    // Якщо вузол - не ELEMENT_NODE, перейти до наступного вузла
    processNode(index + 1);
  }
}

processNode(currentNodeIndex);