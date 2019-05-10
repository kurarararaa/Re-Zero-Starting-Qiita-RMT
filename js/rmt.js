window.onload = () => {
  // いいね => 鬼がかってますね
  const like = document.getElementsByClassName('it-Actions_item-like');
  if (like.length) like[0].lastElementChild.dataset.tip = '鬼がかってますね';
  // ストック => 言質とりました
  const stock = document.getElementsByClassName('it-Actions_item-stock');
  if (stock.length) stock[0].lastElementChild.dataset.tip = '言質とりました';
}
