<script setup>
	import { ethers } from 'ethers'
	import { ref, onMounted } from 'vue'
	import VoteButton from './components/VoteButton.vue'
	import dvoteArtifact from '../../DVote-Truffle/build/contracts/DVote.json'

	let candidateVotes = ref([0, 0, 0])

	const provider = new ethers.providers.Web3Provider(window.ethereum)
	const abi = dvoteArtifact.abi

	let contract = new ethers.Contract("0xbe8008Af782d24ec7a97056D746eEDf7b3BE53d0", abi, provider.getSigner())

	onMounted(async () => {
		const address = await window.ethereum.request({ method: 'eth_requestAccounts' })

		console.log(address)

		const votes = await contract.getAll().then(x => x.map(y => y.toNumber()))

		candidateVotes.value = votes
	})
</script>

<template>
	<div class='parent'>
		<div v-for='vote, i in candidateVotes'>
			candidate {{ i+1 }}: {{ vote }}
			
			<VoteButton :i="i" :contract="contract" />
		</div>
	</div>
</template>

<style scoped>
	.parent {
		display: flex;
		gap: 10rem;
	}
</style>