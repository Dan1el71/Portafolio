import { useTranslation } from 'react-i18next'

const MeInfo = () => {
  const { t } = useTranslation()

  return (
    <div className="max-w-xl">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {t('MeInfo.greeting')} {t('MeInfo.name')}, {t('MeInfo.role')}
      </h1>
      <div className="mt-6 text-xl text-gray-300">
        <p className="[&>strong]:text-font-secondary [&>strong]:font-semibold">
          <strong>{t('MeInfo.experience.years')}</strong>{' '}
          {t('MeInfo.experience.description')}
        </p>
        <p className="mt-3 [&>strong]:text-font-secondary [&>strong]:font-semibold">
          {t('MeInfo.passionateAbout.description')}{' '}
          <strong>{t('MeInfo.passionateAbout.alwaysReady')}</strong>
        </p>
      </div>
    </div>
  )
}

export default MeInfo
