import React from 'react';
import { 
  UploadCloud, 
  Palette, 
  FileText, 
  Code2, 
  Filter, 
  Grid,
  Eye,
  Download,
  Shield,
  Share2,
  FolderPlus,
  History,
  MoreHorizontal
} from 'lucide-react';

const FilesView = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Project Files</h2>
          <p className="text-gray-600">
            Manage and access all shared assets for Upcrypt Client.
          </p>
        </div>
        <button className="px-5 py-2.5 bg-[#3b3df2] hover:bg-[#2b2dd2] text-white font-semibold rounded-lg flex items-center gap-2 transition-colors shadow-sm text-sm">
          <UploadCloud className="w-4 h-4" />
          Upload File
        </button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* Designs Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 relative z-10">
            <Palette className="w-5 h-5 text-[#3b3df2]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 relative z-10">Designs</h3>
          <div className="flex items-center justify-between relative z-10">
            <span className="text-sm font-medium text-gray-500">24 Files</span>
            <span className="text-sm font-bold text-[#3b3df2]">1.2 GB</span>
          </div>
        </div>

        {/* Documentation Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4 relative z-10">
            <FileText className="w-5 h-5 text-[#d97706]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 relative z-10">Documentation</h3>
          <div className="flex items-center justify-between relative z-10">
            <span className="text-sm font-medium text-gray-500">12 Files</span>
            <span className="text-sm font-bold text-[#d97706]">450 MB</span>
          </div>
        </div>

        {/* Source Code Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 relative z-10">
            <Code2 className="w-5 h-5 text-[#3b3df2]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 relative z-10">Source Code</h3>
          <div className="flex items-center justify-between relative z-10">
            <span className="text-sm font-medium text-gray-500">8 Repositories</span>
            <span className="text-sm font-bold text-[#3b3df2]">2.8 GB</span>
          </div>
        </div>
      </div>

      {/* Recent Files Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-6">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">Recent Files</h3>
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <th className="py-4 px-6">File Name</th>
                <th className="py-4 px-6">Size</th>
                <th className="py-4 px-6">Uploader</th>
                <th className="py-4 px-6">Date Uploaded</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              
              {/* Row 1 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500 font-bold text-xs">
                      FIG
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Main_Dashboard_v2.fig</p>
                      <p className="text-xs text-gray-500">Design System</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-700">124 MB</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#3b3df2] text-white flex items-center justify-center text-[10px] font-bold">A</div>
                    <span className="text-sm font-medium text-gray-700">Alex.eth</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-500">Oct 12, 2023</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="p-1.5 text-[#3b3df2] hover:bg-blue-50 rounded transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-1.5 text-[#3b3df2] hover:bg-blue-50 rounded transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#3b3df2] font-bold text-xs">
                      PDF
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Contract_v4_Final.pdf</p>
                      <p className="text-xs text-gray-500">Legal</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-700">2.4 MB</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#3b3df2] text-white flex items-center justify-center text-[10px] font-bold">C</div>
                    <span className="text-sm font-medium text-gray-700">CryptoLia.eth</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-500">Oct 10, 2023</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="p-1.5 text-[#3b3df2] hover:bg-blue-50 rounded transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-1.5 text-[#3b3df2] hover:bg-blue-50 rounded transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 text-[#d97706] font-bold text-xs">
                      ZIP
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Frontend_Assets.zip</p>
                      <p className="text-xs text-gray-500">Dev</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-700">856 MB</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#d97706] text-white flex items-center justify-center text-[10px] font-bold">M</div>
                    <span className="text-sm font-medium text-gray-700">MaxDev.eth</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-500">Oct 08, 2023</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="p-1.5 text-[#3b3df2] hover:bg-blue-50 rounded transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-1.5 text-[#3b3df2] hover:bg-blue-50 rounded transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-600 font-bold text-xs">
                      MD
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">README_Project_Spec.md</p>
                      <p className="text-xs text-gray-500">Documentation</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-700">12 KB</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#3b3df2] text-white flex items-center justify-center text-[10px] font-bold">A</div>
                    <span className="text-sm font-medium text-gray-700">Alex.eth</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-500">Oct 05, 2023</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="p-1.5 text-[#3b3df2] hover:bg-blue-50 rounded transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-1.5 text-[#3b3df2] hover:bg-blue-50 rounded transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-100">
          <span className="text-xs font-semibold text-gray-500">Showing 1-4 of 48 files</span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-gray-200 text-gray-500 font-semibold text-sm rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-200 text-gray-700 font-semibold text-sm rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        
        {/* IPFS Card */}
        <div className="bg-[#f0f2fe] rounded-2xl p-8 border border-white shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[#3b3df2] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#3b3df2] mb-2">IPFS Redundancy Active</h3>
            <p className="text-gray-700 text-sm font-medium leading-relaxed">
              Your project files are distributed across 3 IPFS nodes for permanent, decentralized availability.
            </p>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-[#f0f2fe] rounded-2xl p-6 border border-white shadow-sm relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-900">Quick Actions</h3>
            <button className="text-gray-500 hover:text-gray-900 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md transition-shadow group">
              <Share2 className="w-5 h-5 text-[#3b3df2] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-gray-800">Share Folder</span>
            </button>
            
            <button className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md transition-shadow group">
              <FolderPlus className="w-5 h-5 text-[#3b3df2] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-gray-800">New Folder</span>
            </button>
            
            <button className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md transition-shadow group">
              <History className="w-5 h-5 text-[#3b3df2] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-gray-800">Logs</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FilesView;
