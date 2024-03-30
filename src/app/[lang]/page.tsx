import Link from 'next/link'
import { CuppingResult } from '@/src/commons/types/type'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/dictionaries/getDictionary'

const cuppingResults: CuppingResult[] = [
  { id: 1, date: '2024-03-29', coffee: 'エチオピア シダモ', score: 92 },
  { id: 2, date: '2024-03-28', coffee: 'ケニアAA', score: 88 },
  { id: 3, date: '2024-03-27', coffee: 'ブラジル イエローブルボン', score: 85 },
]

export default async function IndexPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(params.locale)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">{dict.sample!.dashboard}</h1>
        <p className="text-lg text-gray-700 mb-4">
          ダッシュボードページへようこそ！
        </p>
        <p className="text-base text-gray-600">
          ここでは、カッピングアプリのダッシュボード機能を利用できます。カッピングの履歴を閲覧したり、プロフィール情報を編集したりすることができます。
        </p>
        <Link
          href="/ja/cupping"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
        >
          カッピングを始める
        </Link>

        <h2 className="text-2xl font-bold mt-8">最近のカッピング結果</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">日付</th>
                <th className="px-4 py-2">コーヒー</th>
                <th className="px-4 py-2">スコア</th>
              </tr>
            </thead>
            <tbody>
              {cuppingResults.map((result) => (
                <tr key={result.id} className="border-b border-gray-200">
                  <td className="px-4 py-2">{result.date}</td>
                  <td className="px-4 py-2">{result.coffee}</td>
                  <td className="px-4 py-2">{result.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
