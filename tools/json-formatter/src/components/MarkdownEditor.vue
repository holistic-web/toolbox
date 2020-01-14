<template>

	<v-tabs
		v-model="activeTab"
		light>
		<v-tab ripple key="edit">
		Edit
		</v-tab>
		<v-tab-item key="edit">
			<v-card flat>
				<textarea
					class="MarkdownEditor__block"
					:value="markDown"
					@input="update"
					@blur="activeTab = 1"/>
			</v-card>
		</v-tab-item>
		<v-tab ripple key="preview">
		Preview
		</v-tab>
		<v-tab-item key="preview">
			<v-card flat>
				<div
					class="MarkdownEditor__block"
					v-html="compiledMarkdown"
					@click="activeTab = 0"/>
			</v-card>
		</v-tab-item>
	</v-tabs>

</template>

<script>
import marked from 'marked';
export default {
	props: {
		value: {
			type: String,
			default: '# Something Worthwhile...'
		}
	},
	data() {
		return {
			markDown: '',
			activeTab: 1
		};
	},
	computed: {
		compiledMarkdown() {
			return marked(this.markDown, { sanitize: true });
		}
	},
	methods: {
		update(e) {
			this.markDown = e.target.value;
			this.$emit('update', this.markDown);
		}
	},
	watch: {
		value() {
			this.markDown = this.value;
		}
	}
};
</script>


<style lang="scss">
.MarkdownEditor {
	margin: 0;
	height: 100%;
	font-family: 'Helvetica Neue', Arial, sans-serif;
	color: #333;
	background: white;
	position: relative;
	&__block {
		width: 100%;
		padding: 8px;
		height: 100%;
		height: 400px;
		border: 1px dashed #ccc;
		cursor: text;
	}
}
</style>