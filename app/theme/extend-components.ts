import { type CssVarsThemeOptions, inputLabelClasses } from '@mui/material';
import { alpha } from '@mui/material';
export const extendComponents: CssVarsThemeOptions['components'] = {
	MuiTextField: {
		defaultProps: {
			variant: 'filled',
		},
	},

	MuiIconButton: {
		styleOverrides: {
			root: {
				opacity: 0.7,
			},
		},
	},

	MuiButton: {
		defaultProps: {
			disableElevation: true,
		},
		styleOverrides: {
			root: ({ ownerState, theme }) => ({
				fontWeight: 700,
				fontSize: 14,
				textTransform: 'none',
				borderRadius: 12,
				padding: '8px 16px',
			}),
		},
	},

	MuiDivider: {
		defaultProps: {
			light: true,
		},
		styleOverrides: {
			root: ({ theme, ownerState }) => ({
				...(ownerState.light && {
					borderColor: `rgba(${theme.palette.dividerChannel}/0.06)`,
				}),
			}),
		},
	},

	MuiContainer: {
		defaultProps: {
			maxWidth: 'xl',
		},
		styleOverrides: {
			root: {
				padding: '0 1.6rem',
			},
		},
	},

	MuiSelect: {
		defaultProps: {
			variant: 'filled',
		},
	},

	MuiFormLabel: {
		styleOverrides: {
			root: {
				[`&.${inputLabelClasses.filled}`]: {
					transform: 'translate(12px, 18px) scale(1)',
				},
				[`&.${inputLabelClasses.shrink}`]: {
					[`&.${inputLabelClasses.standard}`]: {
						transform: 'translate(0, -1.5px) scale(0.85)',
					},
					[`&.${inputLabelClasses.filled}`]: {
						transform: 'translate(12px, 6px) scale(0.85)',
					},
					[`&.${inputLabelClasses.outlined}`]: {
						transform: 'translate(14px, 6px) scale(0.85)',
					},
				},
			},
		},
	},

	MuiAlert: {
		styleOverrides: {
			root: {
				borderRadius: 12,
			},
		},
	},

	MuiLink: {
		defaultProps: {
			underline: 'none',
			color: 'inherit',
		},
	},

	MuiPaper: {
		styleOverrides: {
			root: {
				borderRadius: 12,
			},
		},
	},

	MuiFilledInput: {
		styleOverrides: {
			root: ({ ownerState, theme }) => ({
				'borderRadius': 12,
				'backgroundColor': 'transparent',
				'borderStyle': 'solid',
				'borderWidth': 1,
				'overflow': 'hidden',
				'borderColor': theme.vars.palette.action.selected,
				'transition': theme.transitions.create([
					'border-color',
					'box-shadow',
				]),
				'&:hover': {
					backgroundColor: theme.vars.palette.action.hover,
				},
				'&:before': {
					display: 'none',
				},
				'&:after': {
					display: 'none',
				},

				'&.Mui-focused': {
					backgroundColor: 'transparent',
					borderColor: 'transparent',
					boxShadow: `${theme.vars.palette.primary.main} 0 0 0 2px`,
				},

				'&.Mui-error': {
					borderColor: 'transparent',
					boxShadow: `${theme.vars.palette.error.main} 0 0 0 2px`,
				},

				'input': {
					[theme.getColorSchemeSelector('dark')]: {
						'&:-webkit-autofill': {
							'-webkit-box-shadow':
								'0 0 0 100px rgb(18,18,18) inset',
							'transition':
								'background-color 5000s ease-in-out 0s',

							'&:hover': {
								'-webkit-box-shadow': `0 0 0 100px rgb(37,37,37) inset`,
							},
						},
					},

					[theme.getColorSchemeSelector('light')]: {
						'&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
							{
								'-webkit-box-shadow': '0 0 0 100px #FFF inset',
								'transition':
									'background-color 5000s ease-in-out 0s',

								'&:hover': {
									'-webkit-box-shadow': `0 0 0 100px rgb(245,245,245) inset`,
								},
							},
					},
				},
			}),
		},
	},
};
