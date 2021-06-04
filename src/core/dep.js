let uidDep = 0;
export default class Dep {
  static target = null;
  static targetStack = [];

  static popTarget = function() {
    Dep.targetStack.pop();
    Dep.target = Dep.targetStack[Dep.targetStack.length - 1];
  };

  addSub(watcher) {
    this.subs.push(watcher);
  }
  removeSub(sub) {
    if (this.subs.length) {
      const index = this.subs.indexOf(sub);
      if (index > -1) {
        return this.subs.splice(index, 1);
      }
    }
  }
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }
  notify() {
    const subs = this.subs.slice(); // 浅拷贝，不然会造成死循环
    for (let i = 0; i < subs.length; i++) {
      subs[i].update();
    }
  }
}
