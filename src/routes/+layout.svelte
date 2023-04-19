<script>
	import '../app.postcss';
</script>

<div class="bg-transparent h-20 p-3 sm:px-5 absolute w-full z-20 top-0 left-0 group-hover:bg-white">
	<div class="container grid grid-cols-2 h-full items-center">
		<div class="flex items-center h-full">
			<div class="h-full w-1/6 bg-dart-logo bg-contain bg-no-repeat bg-center mr-5" />
			<div
				class="self-center lg:text-2xl text-xl text-oxfordBlue font-bold select-none whitespace-nowrap"
			>
				Dengue Advanced Readiness Tools
			</div>
		</div>
		<div class="items-center hidden w-full justify-center md:flex md:w-auto">
			<div
				class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
			>
				<div>
					<a href="/" class="navbar-text-current"> Home </a>
				</div>
				<div>
					<a href="/" class="navbar-text"> Our Team </a>
				</div>
			</div>
		</div>
	</div>
</div>

<slot />
