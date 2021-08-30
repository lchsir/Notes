
/* 事件捕获和事件冒泡机制 */

// 1、事件捕获
// 当一个事件触发后,从Window对象触发,不断经过下级节点,直到目标节点。在事件到达目标节点之前的过程就是捕获阶段。所有经过的节点,都会触发对应的事件

// 2、目标阶段
// 当事件不断的传递直到目标节点的时候，最终在目标节点上触发这个事件，就是目标阶段

// 3、事件冒泡
// 当事件到达目标节点后，会沿着捕获阶段的路线原路返回。同样，所有经过的节点,都会触发对应的事件


// 1、事件冒泡 （由下而上）
{/* <div>
  div1 ---
  <div>
    div2 ---
    <div>
      div3 ---
    </div>
  </div>
</div> */}

// 点击div3 （由下而上）
// 阻止冒泡：event.stopPropagation()


// 2、事件捕获 （自上向下）

// e.target 和 e.currentTarget 区别
// target：  触发谁指向的就是谁，就作用到谁（触发者）
// currentTarget：  绑定的事件元素，绑定的谁就指向谁（绑定者）会向下传播


// 3、事件委托

{/* <ul id="list">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul> */}

// 传统的一个一个触发
var list = document.getElementById('list')
var li = list.getElementsByTagName('li')
for (var i = 0; i < li.length; i++) {
  li[i].onclick = function() {
    this.style.color = 'red'
  }
}

// 借助事件委托，将事件绑定到父节点，点击节点通过事件冒泡到夫并处理
var list = document.getElementById('list')
list.onclick = function(e) {
  if (e.target.nodeName === 'LI') {
    e.target.style.color = 'red'
  }
}



