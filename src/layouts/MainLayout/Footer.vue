<script setup>
import { footerLinks } from './const.ts'
</script>

<template>
  <div class="footer">
    <div>
      <div class="website-list">
        <a
          v-for="item in footerLinks"
          :key="item.name"
          :href="item.href"
          target="_blank"
          class="item"
        >
          {{ item.name }}
        </a>
      </div>
      <div class="record-info">
        <div>©2015-2023广州小鹏汽车科技有限公司</div>
        <div>
          <a href="https://beian.miit.gov.cn">粤ICP备15067788号</a>
        </div>
        <div>
          <a
            href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010602005675"
            >粤公网安备 44010602005675号</a
          >
          <a
            href="https://xps01.xiaopeng.com/cms/material/pic/2020/09-04/pic_20200904111924_34980.jpg"
            >营业执照</a
          >
        </div>
      </div>
    </div>

    <div class="footer-right">
      <div class="top">
        <div class="media-info">
          <div>
            <a
              class="media-item"
              href="https://weibo.com/p/1006065710264970/home?from=page_100606&amp;mod=TAB#place"
              target="_blank"
            >
              <img
                src="https://xps01.xiaopeng.com/www/public/img/weibo.abf3e4c3.svg"
                alt=""
              />
            </a>
          </div>
          <div class="weixin-wrapper">
            <a class="media-item">
              <img
                src="https://xps01.xiaopeng.com/www/public/img/weixin.2621439a.svg"
                alt=""
              />
            </a>
            <div class="weixin-popover">
              <div>微信小程序</div>
              <img
                class="image-qrcode"
                src="https://s.xiaopeng.com/xp-fe/mini/common/qr-code-1649402059.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>小鹏客服中心：<a href="tel:400-819-3388">400-819-3388</a></div>
      </div>
      <div class="country-info">
        <span>CN</span>
        <img
          class="image-country"
          src="https://xps01.xiaopeng.com/www/public/img/china.d08b3a2b.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  height: 12.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.1rem solid #f2f2f2;
  padding: 0 4.8rem;
  font-size: 1.4rem;
}

.website-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.6rem;

  .item {
    padding: 0 1.6rem;
    border-right: 0.1rem solid rgba(0, 0, 0, 0.1);
    line-height: 1;
    transition: 0.1s;

    &:hover {
      opacity: 0.6;
    }

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      border-right: none;
    }
  }
}

.record-info {
  display: flex;
  color: #999;

  & > div {
    margin-right: 4.8rem;
  }
}

.footer-right {
  .top {
    display: flex;
    align-items: center;

    .media-info {
      display: flex;
      border-right: 0.1rem solid rgba(0, 0, 0, 0.1);
      margin-right: 1.6rem;

      .media-item {
        margin-right: 1.6rem;
        width: 3.2rem;
        height: 3.2rem;
        transition: 0.1s ease-in-out;

        :is(img) {
          width: 3.2rem;
          height: 3.2rem;
        }

        &:hover {
          opacity: 0.6;
        }
      }

      .weixin-wrapper:hover .weixin-popover {
        display: unset;
      }

      .weixin-popover {
        display: none;
        position: absolute;
        left: 50%;
        top: 0;
        box-shadow: -0.4rem 0.4rem 4rem rgba(0, 0, 0, 0.08);
        width: 13.6rem;
        height: 17rem;
        font-size: 1.2rem;
        text-align: center;
        padding: 1.6rem 0.8rem;
        margin-top: -1.9rem;
        margin-left: -1rem;
        background-color: #fff;
        transform: translate(-50%, -100%);

        .image-qrcode {
          width: 12rem;
          height: 12rem;
          margin-top: 0.8rem;
        }

        &::after {
          content: '';
          display: block;
          width: 1.4rem;
          height: 1.4rem;
          background-color: #fff;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.7rem;
          margin: 0 auto;
          transform: rotate(45deg);
        }
      }
    }
  }
}

.country-info {
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .image-country {
    margin-left: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
  }
}
</style>