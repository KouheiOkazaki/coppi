import LocaleSwitcher from '@/src/components/locale-switcher'
import { Locale } from '../../../../i18n-config'
import Counter from '@/src/components/counter'
import { getDictionary } from '@/dictionaries/getDictionary'

export default async function IndexPage({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const dictionary = await getDictionary(lang)

	return (
		<div>
			<LocaleSwitcher />
			<p>Current locale: {lang}</p>
			<p>{dictionary.serverComponent!.welcome}</p>
			<Counter dictionary={dictionary.counter!} />
		</div>
	)
}
