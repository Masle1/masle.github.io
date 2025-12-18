<template>
  <div class="mailchimp-wrapper">
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form 
          action="https://top.us20.list-manage.com/subscribe/post?u=7d796026405c4a3f0e55238de&amp;id=75d9a74042&amp;f_id=003201eef0" 
          method="post" 
          id="mc-embedded-subscribe-form" 
          name="mc-embedded-subscribe-form" 
          class="validate" 
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2 class="sub-title">订阅文章更新</h2>
            <div class="indicates-required"><span class="asterisk">*</span> 表示必填</div>
            
            <div class="mc-field-group">
              <label for="mce-EMAIL">电子邮件地址 <span class="asterisk">*</span></label>
              <input type="email" name="EMAIL" class="required email custom-input" id="mce-EMAIL" required value="">
            </div>
            
            <div class="name-row">
              <div class="mc-field-group">
                <label for="mce-FNAME">您的姓氏</label>
                <input type="text" name="FNAME" class="text custom-input" id="mce-FNAME" value="">
              </div>
              <div class="mc-field-group">
                <label for="mce-LNAME">您的名字</label>
                <input type="text" name="LNAME" class="text custom-input" id="mce-LNAME" value="">
              </div>
            </div>

            <div class="mc-field-group">
              <label>生日</label>
              <div class="datefield">
                <span class="subfield monthfield">
                  <input class="birthday custom-input birthday-box" type="text" pattern="[0-9]*" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month" value="">
                </span>
                <span class="date-sep">/</span>
                <span class="subfield dayfield">
                  <input class="birthday custom-input birthday-box" type="text" pattern="[0-9]*" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" value="">
                </span>
                <span class="small-meta">( 月 / 日 )</span>
              </div>
            </div>

            <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display: none;"></div>
              <div class="response" id="mce-success-response" style="display: none;"></div>
            </div>

            <div aria-hidden="true" style="position: absolute; left: -5000px;">
              <input type="text" name="b_7d796026405c4a3f0e55238de_75d9a74042" tabindex="-1" value="">
            </div>

            <div class="optionalParent">
              <div class="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button submit-btn" value="开启订阅">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 容器适配 */
.mailchimp-wrapper {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

#mc_embed_signup {
  background: var(--va-c-bg-soft, rgba(128, 128, 128, 0.05));
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  max-width: 500px;
  color: var(--va-c-text);
}

.sub-title {
  color: var(--va-c-brand) !important;
  text-align: center;
  font-weight: bold !important;
  margin-bottom: 1.5rem !important;
  border: none !important;
}

.indicates-required {
  font-size: 0.75rem;
  text-align: right;
  margin-bottom: 0.5rem;
  opacity: 0.7;
}

.asterisk { color: #e85c41; }

/* 输入框通用样式 */
.custom-input {
  width: 100%;
  padding: 10px !important;
  border-radius: 6px !important;
  border: 1px solid rgba(128, 128, 128, 0.3) !important;
  background: var(--va-c-bg, #fff) !important;
  color: var(--va-c-text) !important;
  box-sizing: border-box;
}

.custom-input:focus {
  border-color: var(--va-c-brand) !important;
  outline: none;
}

/* 姓名排版 */
.name-row {
  display: flex;
  gap: 1rem;
}
.name-row .mc-field-group { flex: 1; }

/* 生日框专项修复 */
.datefield {
  display: flex;
  align-items: center;
  gap: 10px;
}

.birthday-box {
  width: 65px !important; /* 强制设置宽度，防止在某些浏览器下缩成一条线 */
  display: inline-block !important;
  text-align: center;
}

.date-sep { font-weight: bold; opacity: 0.5; }
.small-meta { font-size: 0.8rem; opacity: 0.6; }

/* 提交按钮 */
.submit-btn {
  width: 100% !important;
  height: 45px !important;
  background-color: var(--va-c-brand) !important;
  color: #fff !important;
  border: none !important;
  border-radius: 8px !important;
  font-weight: bold !important;
  margin-top: 1rem !important;
  transition: opacity 0.2s;
  cursor: pointer;
}

.submit-btn:hover {
  opacity: 0.9;
}

/* 响应式 */
@media (max-width: 500px) {
  .name-row { flex-direction: column; gap: 0; }
  #mc_embed_signup { padding: 1rem; }
}
</style>