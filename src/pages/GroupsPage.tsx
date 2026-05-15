import { useState } from 'react';
import { Link } from 'react-router';
import { aromaticGroups, type AromaticGroup } from '../data/mockData';
import { X, Sun, Snowflake, Leaf, Flame, ChevronRight, Layers } from 'lucide-react';

const seasonIcon: Record<string, React.ReactNode> = {
  Primavera: <Leaf className="w-3.5 h-3.5 text-green-500" />,
  Verão:     <Sun className="w-3.5 h-3.5 text-yellow-500" />,
  Outono:    <Flame className="w-3.5 h-3.5 text-orange-500" />,
  Inverno:   <Snowflake className="w-3.5 h-3.5 text-blue-400" />,
  'Ano todo': <span className="text-xs">🔄</span>,
};
function GroupCard({ group, onClick }: { group: AromaticGroup; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl p-5 text-left transition-all hover:shadow-xl hover:scale-[1.02] active:scale-100 bg-gradient-to-br ${group.gradient} group`}
    >
      {/* Decorative circle */}
      <div
        className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-20"
        style={{ backgroundColor: '#fff' }}
      />
      <div
        className="absolute -right-2 -bottom-4 w-16 h-16 rounded-full opacity-10"
        style={{ backgroundColor: '#fff' }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl">{group.icon}</span>
          <ChevronRight className="w-5 h-5 opacity-60 group-hover:translate-x-1 transition-transform" style={{ color: group.textColor }} />
        </div>
        <h3 className="font-black text-xl mb-1" style={{ color: group.textColor }}>
          {group.name}
        </h3>
        <p className="text-sm opacity-80 line-clamp-2 mb-3" style={{ color: group.textColor }}>
          {group.description}
        </p>

        {/* Characteristics */}
        <div className="flex flex-wrap gap-1 mb-3">
          {group.characteristics.map(c => (
            <span
              key={c}
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: group.textColor }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Season & gender footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {group.seasonality.slice(0, 2).map(s => (
              <div key={s} className="flex items-center gap-0.5">
                {seasonIcon[s]}
              </div>
            ))}
          </div>
          <span
            className="text-xs font-medium opacity-80"
            style={{ color: group.textColor }}
          >
            {group.subGroups.length} sub-grupos
          </span>
        </div>
      </div>
    </button>
  );
}

import { createPortal } from 'react-dom';

function GroupModal({ group, onClose }: { group: AromaticGroup; onClose: () => void }) {
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className={`bg-gradient-to-br ${group.gradient} p-6 rounded-t-3xl relative overflow-hidden`}>
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute -right-2 bottom-0 w-20 h-20 rounded-full bg-white/5" />
          <div className="relative flex items-start justify-between">
            <div>
              <span className="text-5xl mb-2 block">{group.icon}</span>
              <h2 className="font-black text-2xl" style={{ color: group.textColor }}>{group.name}</h2>
              <p className="text-sm opacity-80 mt-1" style={{ color: group.textColor }}>{group.gender}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              style={{ color: group.textColor }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6 space-y-5">
          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Sobre</h3>
            <p className="text-gray-700 leading-relaxed">{group.description}</p>
          </div>

          {/* Characteristics */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Características</h3>
            <div className="flex flex-wrap gap-2">
              {group.characteristics.map(c => (
                <span key={c} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Sub-groups */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Sub-grupos</h3>
            <div className="grid grid-cols-2 gap-2">
              {group.subGroups.map(sg => (
                <div key={sg} className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} />
                  <span className="text-sm text-gray-700">{sg}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Seasonality */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Estações Ideais</h3>
            <div className="flex flex-wrap gap-2">
              {group.seasonality.map(s => (
                <div key={s} className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-700">
                  {seasonIcon[s]}
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Representative perfumes */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Perfumes Representativos</h3>
            <div className="space-y-2">
              {group.representativePerfumes.map(name => (
                <div key={name} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: group.color }} />
                  <span className="text-sm text-gray-700 italic">"{name}"</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Link
              to={`/busca?grupo=${group.id}`}
              onClick={onClose}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r ${group.gradient} hover:opacity-90 transition-opacity`}
            >
              Ver perfumes deste grupo
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
export default function GroupsPage() {
  const [activeGroup, setActiveGroup] = useState<AromaticGroup | null>(null);
  return (
    <>
    <div className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8 bg-white/40  backdrop-blur-sm rounded-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Intro card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-8 flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🌐</span>
          </div>
          <div>
            <h2 className="font-bold text-gray-900 mb-1">O que são grupos aromáticos?</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              As famílias olfativas são categorias que classificam fragrâncias de acordo com suas características predominantes.
              Criadas pela indústria perfumísta para facilitar a comunicação entre criadores, varejistas e consumidores.
              Conhecer os grupos ajuda você a encontrar perfumes com maior precisão.
            </p>
          </div>
        </div>

        {/* Groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {aromaticGroups.map(group => (
            <GroupCard key={group.id} group={group} onClick={() => setActiveGroup(group)} />
          ))}
        </div>

        {/* Fragrance Family Quick Reference */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="font-bold text-gray-900">Referência Rápida — Famílias Olfativas</h3>
            <p className="text-xs text-gray-500 mt-0.5">Sub-grupos de cada família</p>
          </div>
          <div className="divide-y divide-gray-100">
            {aromaticGroups.map(group => (
              <div key={group.id} className="px-5 py-4 flex items-start gap-4">
                <div className="flex items-center gap-2 w-36 flex-shrink-0">
                  <span className="text-xl">{group.icon}</span>
                  <button
                    onClick={() => setActiveGroup(group)}
                    className="font-bold text-sm text-gray-900 hover:text-purple-600 transition-colors text-left"
                  >
                    {group.name}
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {group.subGroups.map(sg => (
                    <span
                      key={sg}
                      className="text-xs px-2 py-0.5 rounded-full border font-medium"
                      style={{
                        backgroundColor: `${group.color}20`,
                        color: group.id === 'woody' || group.id === 'leather' ? '#44403c' : group.textColor,
                        borderColor: `${group.color}50`,
                      }}
                    >
                      {sg}
                    </span>
                  ))}
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  {group.seasonality.map(s => (
                    <span key={s} className="flex items-center" title={s}>
                      {seasonIcon[s]}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gender guide */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {[
            { label: 'Predominantemente Feminino', groups: aromaticGroups.filter(g => g.gender.includes('Feminino')), color: '#fce7f3', text: '#be185d', icon: '🌸' },
            { label: 'Predominantemente Masculino', groups: aromaticGroups.filter(g => g.gender.includes('Masculino')), color: '#dbeafe', text: '#1e40af', icon: '🌊' },
            { label: 'Unissex', groups: aromaticGroups.filter(g => g.gender === 'Unissex'), color: '#f3e8ff', text: '#7c3aed', icon: '✨' },
          ].map(section => (
            <div
              key={section.label}
              className="rounded-xl border p-4"
              style={{ borderColor: `${section.text}30`, backgroundColor: section.color }}
            >
              <h4 className="text-sm font-bold mb-2 flex items-center gap-1.5" style={{ color: section.text }}>
                <span>{section.icon}</span> {section.label}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {section.groups.map(g => (
                  <button
                    key={g.id}
                    onClick={() => setActiveGroup(g)}
                    className="text-xs px-2 py-1 rounded-full font-medium border hover:opacity-75 transition-opacity"
                    style={{ backgroundColor: g.color, color: g.textColor, borderColor: `${g.color}80` }}
                  >
                    {g.icon} {g.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Modal */}
      {activeGroup && (
        <GroupModal group={activeGroup} onClose={() => setActiveGroup(null)} />
      )}
    </>
  );
}
