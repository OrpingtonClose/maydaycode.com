<template>
	<footer id="contact" class="default-box">
    <div class="columns is-multiline is-gapless is-mobile">
			<div id="emailContainer" class="column is-4-tablet is-12-mobile flex-centered-content">
        <a name="contactArrow">
          <img src="../assets/arrow-icon.png" style="height: 25px; margin-right: 0.5em !important;" alt="Simple arrow icon">
        </a>
        <a href="mailto:init@maydaycode.com">init@maydaycode.com</a>
			</div>
			<div id="phoneContainer" class="column is-4-tablet is-12-mobile flex-centered-content">
				<img src="../assets/phone-icon.png" style="height: 35px; margin-right: 0.5em !important; " alt="Simple phone icon"><a href="tel:+36705031208">+36705031208</a>
			</div>
			<div id="moreInfoSwitchContainer" class="column is-4-tablet is-12-mobile flex-centered-content" :class="{less: moreVisible, more: !moreVisible}">
				<a href="#" @click.prevent="moreVisible = !moreVisible">{{moreVisible == true ? getTranslate('less') : getTranslate('more')}}</a>
			</div>
			<div v-if="moreVisible" class="column is-12" id="moreInfoContainer">
				<table>
					<thead>
						<tr>
							<td colspan="2">
								<h3>MAY DAY Bt.</h3>
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="attr" v-lang.address>&nbsp;</td><td>
								<span class="line" v-lang.addressFirst></span>
                <span class="line" v-lang.addressSecond></span>
								<span class="line" v-lang.addressThird></span>
							</td>
						</tr>
						<tr>
							<td class="attr" v-lang.taxId>&nbsp;</td><td>21447350-1-11</td>
						</tr>
						<tr>
							<td class="attr" v-lang.regId>&nbsp;</td><td>11-06-010883</td>
						</tr>
					</tbody>
				</table>
				<table class="accounts">
					<tbody>
						<tr>
							<td class="sign">BTC</td>
						</tr>
						<tr>
							<td>1MxNiW7UEFTTxDXE45t8wBXuPAgGRKc52K</td>
						</tr>
						<tr>
							<td class="sign">ETH</td>
						</tr>
						<tr>
							<td>0xFC197CD782fB47726279B5aB46aD2FAac6a27c57</td>
						</tr>
						<tr>
							<td class="sign">HUF <a href="#" @click.prevent="isGIRO = !isGIRO" class="formatButton">{{isGIRO == true ? "GIRO" : "IBAN"}}</a></td>
						</tr>
						<tr>
							<td>
								<span v-show="isGIRO">12100011-17910860-00000000</span>
								<span v-cloak v-show="!isGIRO">HU76121000111791086000000000</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="column is-12 has-text-centered" id="copyrightContainer">
				v0.1 | &copy; {{new Date().getFullYear()}} MayDay Bt.
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				isGIRO: true,
				moreVisible: false
			}
		},
    methods: {
		  getTranslate(key) {
		    return this.translate(key);
      }
    }
	}
</script>

<style>

</style>
