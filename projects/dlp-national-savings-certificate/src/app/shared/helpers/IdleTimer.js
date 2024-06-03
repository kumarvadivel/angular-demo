class IdleTimer {
  constructor({timeout, onTimeout, onExpired}) {
      this.timeout = timeout;
      this.onTimeout = onTimeout;
      window.addEventListener('beforeunload', () => {
          sessionStorage.setItem("UI__expiredTime", Date.now() + this.timeout * 1000)
      })
      window.addEventListener('load', () => {
          const expiredTime = parseInt(sessionStorage.getItem("UI__expiredTime"), 10);
          if (expiredTime > 0 && expiredTime < Date.now()) {
              onExpired();
          }
      })
      this.eventHandler = this.updateExpiredTime.bind(this);
      this.tracker();
      this.startInterval();
  }

  startInterval() {
      this.updateExpiredTime();
      this.interval = setInterval(() => {
          const expiredTime = parseInt(this.timer_v1, 10);
          if (expiredTime < Date.now()) {
              if (this.onTimeout) {
                  this.onTimeout();
                  this.cleanUp();
              }
          }
      }, 1000);
  }

  updateExpiredTime() {
      if (this.timeoutTracker) {
          clearTimeout(this.timeoutTracker);
      }
      this.timeoutTracker = setTimeout(() => {
          this.timer_v1 = Date.now() + this.timeout * 1000
      }, 300);
  }

  tracker() {
      window.addEventListener("mousemove", this.eventHandler);
      window.addEventListener("scroll", this.eventHandler);
      window.addEventListener("keydown", this.eventHandler);
  }

  cleanUp() {
      this.timer_v1 = null;
      clearInterval(this.interval);
      window.removeEventListener("mousemove", this.eventHandler);
      window.removeEventListener("scroll", this.eventHandler);
      window.removeEventListener("keydown", this.eventHandler);
  }
}

export default IdleTimer;
