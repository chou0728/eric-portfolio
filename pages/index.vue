<template>
  <div class="index-wrapper">
    <h1>{{ $t('pages.Works.title') }}</h1>
    <div class="works-item-list">
      <el-card
        class="works-item"
        v-for="item in $t('pages.Works.worksItemList')"
        :key="item.id"
      >
        <!-- <a class="mask" :href="item.link" target="_blank" /> -->
        <div
          class="works-item__photo"
          :style="{ backgroundImage: `url(${item.imageUrl})` }"
        ></div>
        <div class="works-item__content">
          <h2 class="title">{{ item.title }}</h2>
          <p style="min-height:120px;">{{ item.description }}</p>
          <h3 class="sub-title">{{ $t('pages.Works.technologies') }}</h3>
          <p>{{ item.technologies }}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
};
</script>

<style lang="scss" scoped>
.index-wrapper {
  width: 100%;
  padding: 30px 0;
  text-align: center;
}

.works-item-list {
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4%;
  padding: 0 50px;

  @include RWD-pad {
    padding: 0 30px;
  }

  @include RWD-phone {
    padding: 0 20px;
  }
}

.works-item {
  width: 28%;
  margin-bottom: 4%;
  position: relative;

  @include RWD-pad {
    width: 100%;
    margin-bottom: 10%;
  }

  @include RWD-phone {
    width: 100%;
    margin-bottom: 10%;
  }

  &__photo {
    padding-bottom: 55%;
    background-position: center center;
    background-size: cover;
  }

  &__content {
    padding: 20px;

    .title {
      font-size: $font-size-large;
      margin-bottom: 10px;
    }

    .sub-title {
      font-size: $font-size-medium;
      text-align: left;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    p {
      font-size: $font-size-small;
      text-align: left;
    }
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(65, 65, 65, 0.9);
    z-index: 3;
    opacity: 0;
    transition: all 0.4s ease-in-out;

    &:after {
      display: block;
      content: 'View Site';
      border: 1px solid #fff;
      color: #fff;
      font-size: $font-size-basic;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40%;
    }
  }

  /* &:hover {
    .mask {
      opacity: 1;

      @include RWD-phone {
        opacity: 0;
      }
    }
	} */
}
/deep/ {
  .el-card__body {
    padding: 0;
  }
}
</style>
