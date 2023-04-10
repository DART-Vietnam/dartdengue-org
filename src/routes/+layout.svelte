<script>
	import '../app.postcss';
</script>

<div
	class="bg-white h-20 p-3 sm:px-5 dark:bg-oxfordBlue fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 dark:shadow-sm shadow-md"
>
	<div class="container grid grid-cols-2 h-full items-center">
		<div class="flex items-center h-full">
			<div class="h-full w-1/6 bg-dart-logo bg-contain bg-no-repeat bg-center mr-5" />
			<div
				class="self-center text-2xl text-oxfordBlue font-bold select-none whitespace-nowrap dark:text-white"
			>
				Dengue Advanced Readiness Tools
			</div>
		</div>
		<div class="items-center hidden w-full justify-start md:flex md:w-auto">
			<div
				class="flex flex-col p-4 mt-4 rounded-lg bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
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
