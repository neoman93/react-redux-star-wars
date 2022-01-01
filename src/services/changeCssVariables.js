export const changeCssVariables = (theme) => {
	const root = document.querySelector(':root');

	// root.style.setProperty('--theme-default-header', `var(	--theme-${theme}-header)`);
	// root.style.setProperty('--theme-default-bg-image', `var(	--theme-${theme}-bg-image)`);
	//console.log(root.style, theme);

	const cssVariables = ['header', 'bg-image'];
	cssVariables.forEach((element) => {
		root.style.setProperty(`--theme-default-${element}`, `var(	--theme-${theme}-${element})`);
	});
};
