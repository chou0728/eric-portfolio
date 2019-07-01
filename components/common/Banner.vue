<template>
	<section class="banner-wrapper" :style="cssStyle">
		<div class="banner-container container">
			<div class="banner-mask"></div>
			<div class="banner-text container">
				<h1 class="banner-text__title">{{ $t(`${i18nPrefix}.title`) }}</h1>
				<p class="banner-text__description">{{ $t(`${i18nPrefix}.description`) }}</p>
			</div>
		</div>
	</section>
</template>

<script>

export default {
	name: 'Banner',
	props: {
		i18nPrefix: {
			type: String,
			required: true
		},
		imgSrc: {
			type: String,
			default: ''
		}
	},
	computed: {
		cssStyle() {
			return {
				'background-image': 'url(' + require('../../assets/images/' + this.imgSrc ) + ')'
			}
		}
	},
};
</script>

<style lang="scss" scoped>
.banner-wrapper {
	width: 100%;
	padding-bottom: 25%;
	position: relative;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	
	@include RWD-pad {
		padding-bottom: 40%;
	}
	
	@include RWD-phone {
		padding-bottom: 60%;
	}
}

.banner-mask {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
}

.banner-text {
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;

	&__title {
		color: $color-primary-light;

		@include RWD-phone {
			font-size: $font-size-medium;
		}
	}

	&__description {
		color: $color-white;
		font-size: $font-size-basic;

		@include RWD-phone {
			padding: 0 10px;
			font-size: $font-size-small;
		}
	}
}
</style>
